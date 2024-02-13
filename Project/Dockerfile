FROM prestashop/prestashop:latest

WORKDIR /var/www/html

COPY . /var/www/html

# Remove the install directory
RUN rm -rf /var/www/html/install

# Set permissions for www-data user on additional directories
RUN chown -R www-data:www-data /var/www/html

# Expose any other ports that the app may rely on
EXPOSE 80